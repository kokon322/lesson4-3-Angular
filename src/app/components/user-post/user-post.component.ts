import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../modules/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  postsOfUser: Post [];
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.queryParams.subscribe(value => {
      this.postService.getPostByUserId(value.userId).subscribe(post => {
        this.postsOfUser = post;
      });
    });
  }

  ngOnInit(): void {
  }

}
