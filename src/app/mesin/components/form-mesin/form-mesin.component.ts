import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-mesin',
  templateUrl: './form-mesin.component.html',
  styleUrl: './form-mesin.component.css'
})
export class FormMesinComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  btnSaveDisable: boolean = true;
  action = {
    id: "",
    name : ""
  }

  dummyListID = [
    "HALO",
    "TES",
    "123"
  ]

  kodeWipAlreadyExist : boolean = false;

  validFormStatus = [
    {
      status : true,
      colName : "kodeWIP"
    },
    {
      status : true,
      colName : "deskripsi"
    },
    {
      status : true,
      colName : "uomWIP"
    },
    {
      status : true,
      colName : "idProses"
    },
    {
      status : true,
      colName : "status"
    },
  ]

  reactiveForm = this.fb.group({
    kodeWIP : ["", Validators.required],
    deskripsi : [null, Validators.required],
    uomWIP : [null, Validators.required],
    idProses : [null, Validators.required],
    status : [null, Validators.required]
  })

  ngOnInit(): void {
      // CHECKING TIPE FORM
      this.activatedRoute.params.subscribe( params => {
        this.action.name = params['action']
        if (this.action.name === "add") {
          this.action.id = params['id']
        }
      })

      // UPPERCASE KODE WIP
      this.reactiveForm.get('kodeWIP')?.valueChanges.subscribe(value => {
        if (value !== null) {
          this.reactiveForm.get('kodeWIP')?.patchValue(value.toUpperCase(), { emitEvent: false });
        }
      });

      // MEMBUAT BUTTON SAVE DISABLE SAAT VALUE DARI FORM TIDAK SESUAI
      this.reactiveForm.valueChanges.subscribe(() => {
        this.btnSaveDisable = this.reactiveForm.invalid;
      });


      // CHECK VALIDASI PER KOLOM
      this.reactiveForm.get("kodeWIP")?.valueChanges.subscribe(() => {this.checkValidation(0)});
      this.reactiveForm.get("deskripsi")?.valueChanges.subscribe(() => {this.checkValidation(1)});
      this.reactiveForm.get("uomWIP")?.valueChanges.subscribe(() => {this.checkValidation(2)});
      this.reactiveForm.get("idProses")?.valueChanges.subscribe(() => {this.checkValidation(3)});
      this.reactiveForm.get("status")?.valueChanges.subscribe(() => {this.checkValidation(4)});
      
      // CHECKING APAKAH ID TELAH DIGUNAKAN
      this.reactiveForm.get("kodeWIP")?.valueChanges.subscribe((value) => {
        console.log(value)
        if (this.dummyListID.find((id) => id === value?.toUpperCase())) {
          this.kodeWipAlreadyExist = true;
        } else {
          this.kodeWipAlreadyExist = false;
        }
      });
  }

  checkValidation(index: number) {
    
      const value = this.reactiveForm.get(this.validFormStatus[index].colName)

      if (value?.invalid) {
        this.validFormStatus[index].status = false
      } else {
        this.validFormStatus[index].status = true
      }
  }

  openPage(pageName : string) {
    if (pageName ==="list-mesin") {
      this.router.navigate(['/mesin', 'list-mesin'])
    }
  }
}
