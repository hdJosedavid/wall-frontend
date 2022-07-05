import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '@app/services/rest.service';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {

  public bulletinForm: FormGroup = this.formBuilder.group({
    message: [, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService,
  ) { }

  ngOnInit(): void {
  }

  public setBulletin(): void {
    console.log("signUp", this.bulletinForm.value);
    this.restService.post(
      `${environment.apiBlog}/bulletins`,
      this.bulletinForm.value
    ).subscribe((res: any) => {
      // this.router.navigateByUrl('/home');
    });
    console.log('Bulletin Success!!');
  }

}
