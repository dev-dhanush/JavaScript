import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  step: number = 0;
  examId: number = 0;

  data: any = {};

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params
    //   .map(params => ({
    //     id: params['id'] || 1,
    //     step: params['step'] || 1
    //   }))
    //   .subscribe(p => {
    //     this.data.examId = p.id;
    //     this.data.step = p.step;
    //   })
  }
  doIt() {
    let matrixUrlData = {
      id: this.examId,
      step: this.step
    };
    this.router.navigate(['/exam', 'detail', matrixUrlData]);
  }

}
