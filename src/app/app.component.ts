import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartp01';

  SelectedItem: any = {}

  ItemArray=[
    {
      name:"smudge",
      description:"smudge the cat",
      image:'/assets/smudge.png'
    }
    ,
    {
      name:"drake",
      description:"drake like/dont like",
      image:'/assets/drake.jpg'
    }
    ,
    {
      name:"npc",
      description:"npc meme",
      image:'/assets/npc.jpg'
    }
    ,
    {
      name:"black_scientist",
      description:"he found somethin'",
      image:'/assets/black_guy.jpg'
    }
  ]

  SelectItem(item){
    this.SelectedItem.image=item.image
    this.SelectedItem.name=item.name
    this.SelectedItem.description=item.description
  }



}
