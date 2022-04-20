import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MemberService } from '../../service/member.service';
import { Member } from '../../shared/member.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MemberService],
})
export class RegisterComponent implements OnInit {
  constructor(readonly memberService: MemberService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    this.memberService.selectedMember = {
      _id: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
    };

    if (form) {
      form.reset();
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '' || form.value._id == null) {
      const mem = {
        next: (res: any) => {
          this.resetForm(form);
          window.location.href = '/login';
        },
        error: (error: any) => {
        Swal.fire('', error.error.error, 'error');
          console.log(error.error.error);
        }
      };
      this.memberService.postMember(form.value).subscribe(mem);
    }
  }
}
