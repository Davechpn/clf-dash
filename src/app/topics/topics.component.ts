import { Component, OnInit,AfterViewInit, Input, ViewChild } from '@angular/core';
import {AngularFirestore}from '@angular/fire/firestore'
import {ContentService} from '../content.service';

import { TreeNode, ITreeOptions, TreeComponent } from 'angular-tree-component';


interface TrackNode{
  id:string,
  name:string;
  hasChildren:boolean;
  is_root:boolean;
  parent_id:string;
  schema:string;
  timestamp;
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit, AfterViewInit {
  @Input()curricula_id
  current_topic_name;
  show_select_content;
  current_topic_id
  @ViewChild(TreeComponent,{static:false})tree;

  options: ITreeOptions = {
    getChildren: this.getChildren.bind(this),
    useCheckbox: false,
    levelPadding: 10,
    nodeHeight: 22,
    useVirtualScroll: true,
    dropSlotHeight: 3,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement // HTML
  };

  nodes: any[] = [];
  all_tracks:TrackNode[] = []
  select_content_type: any;
  show_preview: any;
  show_quiz: boolean;
  current_edit: any;
  quiz_contexts: any;
  selected_quiz_context: any;
  constructor(private db:AngularFirestore, private cs:ContentService) {
    this.nodes = [];
  
  }

  ngOnInit(): void {
       this.curricula_id = 'rXvHt3UmAAKsSaxWtvXT'
       this.getTopics(this.curricula_id)

   }

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

   getTopics(id){
    this.db.collection('tracks').valueChanges({idField:'id'})
    .subscribe(x=>{
      if(x){
        console.log(x)
        this.all_tracks = x as TrackNode[]
        this.nodes = this.all_tracks.filter(o=>o.is_root===true)
        this.tree.treeModel.expandAll();
      }
    })
   }

   getChildren(node: any) {
     //const newNodes = this.asyncChildren.map((c) => Object.assign({}, c));
     const child_nodes = this.all_tracks.filter(o=>o.parent_id===node.data.id).map((c) => Object.assign({}, c));
     child_nodes.sort((child1,child2) => child1.timestamp - child2.timestamp);
     return new Promise((resolve, reject) => {
       setTimeout(() => resolve(child_nodes), 700);
     });
   }



   open(){
     console.log('changed size')
    this.tree.sizeChanged()
    this.tree.treeModel.expandAll();
   }

   addTopic(node){   
      console.log('Adding topic under the selected node')
      console.log(node)
      const new_timestamp = this.generateNewId(node)
      console.log('New id and timestamp = '+ new_timestamp)
      //save to db
      let new_topic = { 
        timestamp: new_timestamp,
        name:this.current_topic_name,
        parent_id:node.id
      }

      console.log(new_topic)
      this.db.doc(`tracks/${new_timestamp}`).set(new_topic)

     //set the parent node to expandable = true
      this.db.doc(`tracks/${node.id}`).set({hasChildren:true},{merge:true})
   }

   updateTopic(){

   }

   deleteTopic(){

   }

   openEdit(data){
    this.current_edit = data.id
    this.current_topic_id = '4QNDgi2keLzExIosMTeC'
    this.cs.getQuiz(this.curricula_id,this.current_topic_id)
    .subscribe(x=>{
      if(x){
        this.quiz_contexts = x
        console.log(this.quiz_contexts)
      }   
    })
   }

   closeEdit(data){
    this.current_edit = ''
   }


   selectContent(type,topic_id){
     console.log(type)
     this.select_content_type = type
     this.current_topic_id = '4QNDgi2keLzExIosMTeC';//topic_id
     this.show_select_content = true
   }

   showPreview(){
     this.show_preview = true
   }

   openQuiz(context){
     this.show_quiz = true;
     this.selected_quiz_context = context
   }


   generateNewId(node){
     //generate an id that correspose
     let new_id
     let level
     //if node === root take the timestamp and add a .plus sequence number
     if(node.is_root){
       level = 1
       //append a number after the comma
       //take all the children and
       const child_nodes = this.all_tracks.filter(o=>o.parent_id===node.id).map((c) => Object.assign({}, c));
      
       if(child_nodes.length>0){
         //sort child nodes by timestamp
         child_nodes.sort((child1,child2) => child1.timestamp - child2.timestamp);

         let last_child =  child_nodes.pop()
         console.log(last_child.timestamp)
         //get the number after the comma
         let last_child_decimal_part =  Number((last_child.timestamp + "").split(".")[1])/(10**(level+1));
         console.log(`last child decimal: ${last_child_decimal_part}`)
         const new_decimal_part = last_child_decimal_part + 1/(10**(level*2))
         console.log(`new decimal part ${new_decimal_part}`)
         new_id = node.timestamp + new_decimal_part
         
       }else{
         new_id = node.timestamp + 0.01
       }
       
       
     }else{
       //now we take the on node.timestamp eg 1000.01 and take digits after comma
       const decimal_part  = (node.timestamp + "").split(".")[1];
       //devide digits count by 2 to get level
       const parent_level = decimal_part.length / 2
       //nextlevel = level + 1
       level = parent_level + 1
       console.log(`level ${level}`)
       //get children using node.timpestamp
       const child_nodes = this.all_tracks.filter(o=>o.parent_id===node.id).map((c) => Object.assign({}, c));

       if(child_nodes.length>0){
         child_nodes.sort((child1,child2) => child1.timestamp - child2.timestamp);
         //if there are siblings take the last sibling digits after comma and 
         //add 1 then append back the numbers after the comma
         const last_child = child_nodes.pop()
         console.log(`last child: ${last_child.timestamp}`)
         let last_child_decimal_part =  Number((last_child.timestamp + "").split(".")[1])/(10**(level*2));
         console.log(`last child decimal: ${last_child_decimal_part}`)
          new_id = last_child.timestamp + 1/(10**(level*2))
        // console.log(`new decimal part ${new_deci}`)
        // new_id = node.timestamp + new_decimal_part

       }else{
         //if there are no siblings append the 01 to the node timestamp
         new_id = Number(node.timestamp + "01")
         console.log(`new decimal part : ${new_id}`)
       }
     }
      
   
     return new_id
   }
  
}
