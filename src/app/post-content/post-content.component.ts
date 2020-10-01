import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

  currentId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // let snapshoted_id = this.route.snapshot.paramMap.get('id');

    let id = this.route.paramMap.subscribe(
      (params) => { 
        this.currentId = +params.get('id');
        console.log(params.get('id'));
       }
    );

    this.route.paramMap
      .subscribe(
        params => {
          let id = +params.get('id');
          console.log(id);
        }
      );
  }

  submit(){
    this.router.navigate(['/posts'], {
      queryParams: { page: 1, order: 'newest_return'}
    });
  }

}
