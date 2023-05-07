import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/components/data/dataFake';
import { __values } from 'tslib';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = "https://1.bp.blogspot.com/-D9dYSeqZstU/W5hCbdCt7II/AAAAAAABh50/UPKR_D6GH1kGzdPyjOpW8dR1XCKND2eygCLcBGAs/s1600/bp_tt.png"
  contentTitle:string = "MINHA NOTÍCIA"
  contentDescription:string = "Etiam malesuada risus ac rhoncus sollicitudin. Praesent suscipit luctus elementum. Maecenas suscipit ullamcorper rutrum. Aenean euismod lacinia lectus, sed faucibus sem. Fusce mauris purus, pellentesque vel ultrices a, pretium nec neque. Phasellus quis sapien ac velit hendrerit gravida. Nulla sapien quam, volutpat quis congue id, viverra sed felis. Nam efficitur enim vel purus ultrices, at vehicula dui pretium."
  private id:string | null= "0"

  constructor(
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe( value=>
      this.id=value.get("id")
    )
  }

  setValuesToComponent(id:string | null){
  const result = dataFake.filter(article => article.id) [0]

  this.contentTitle = result.title
  this.contentDescription = result.description
  this.photoCover = result.photoCover
  }

}
