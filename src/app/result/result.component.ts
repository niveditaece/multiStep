import { Component, OnInit, Input }   from '@angular/core';
import { Router } from '@angular/router';
import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/form-data.service';
import { ApiService } from '../api.service';
@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private router: Router, private api: ApiService, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        console.log('in the result component formdata='+this.formData.firstName);
         this.api.postUserData(this.formData)
         .subscribe(res => {
            let id = res['_id'];
            
            this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
        this.router.navigate(['/personal', id]);
          }, (err) => {
            console.log(err);
          });
        
    }
}