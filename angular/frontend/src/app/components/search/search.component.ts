import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
  }



  searchForPosts(textInput: string) {
    console.log(`text is = ${textInput}`);
    this.router.navigateByUrl(`/search/${textInput}`);
  }


}
