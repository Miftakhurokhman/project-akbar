import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-proses',
  templateUrl: './form-proses.component.html',
  styleUrl: './form-proses.component.css'
})
export class FormProsesComponent implements OnInit {

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

  formIsEdited = true
  idProsesAlreadyExist : boolean = false;

  validFormStatus = [
    {
      status : true,
      colName : "idProses",
      disableCol : true,
    },
    {
      status : true,
      colName : "proses",
      disableCol : true,
    },
    {
      status : true,
      colName : "status",
      disableCol : true,
    },
  ]

  dummyEditValue = {
    idProses : "1",
    proses : "KODE TES",
    status : "Yes"
  }

  reactiveForm = this.fb.group({
    idProses: [{ value: '', disabled: true}, Validators.required],
    proses: [{ value: '', disabled: true}, Validators.required],
    status: [{ value: '', disabled: true}, Validators.required]
  });

  ngOnInit(): void {
      // CHECKING TIPE FORM
      this.activatedRoute.queryParams.subscribe( params => {
        this.reactiveForm.reset();
        this.action.name = params['action']
        if (this.action.name === "edit") {
          this.reactiveForm.patchValue(this.dummyEditValue);
          this.formIsEdited = false
          // MEMBUAT BUTTON SAVE DISABLE SAAT VALUE DARI FORM TIDAK SESUAI
          this.reactiveForm.valueChanges.subscribe(() => {
            this.btnSaveDisable = !this.formIsEdited || this.reactiveForm.invalid;
          });
        } else if ( this.action.name === 'add') {
          this.reactiveForm.enable();     
          this.reactiveForm.get('status')?.disable();
          this.reactiveForm.get('status')?.patchValue("Yes");
          // MEMBUAT BUTTON SAVE DISABLE SAAT VALUE DARI FORM TIDAK SESUAI
          this.reactiveForm.valueChanges.subscribe(() => {
            this.btnSaveDisable = this.checkKodeWIP() || this.reactiveForm.invalid;
          });
        }
      })

      // UPPERCASE KODE WIP
      this.uppercaseValue("idProses");


      // CHECK VALIDASI PER KOLOM
      this.reactiveForm.get("idProses")?.valueChanges.subscribe(() => {this.checkValidation(0)});
      this.reactiveForm.get("proses")?.valueChanges.subscribe(() => {this.checkValidation(1)});
      this.reactiveForm.get("status")?.valueChanges.subscribe(() => {this.checkValidation(2)});
      
  }

  setFormStatus () {
    this.formIsEdited = !this.formIsEdited
    
    
    if (this.formIsEdited) {
      if (!this.reactiveForm.invalid) {
        this.btnSaveDisable = false
      }
    } else {
      this.btnSaveDisable = true;
    }
    if (this.formIsEdited) {      
      this.reactiveForm.get('proses')?.enable();      
      this.reactiveForm.get('status')?.enable();      
    } else {      
      this.reactiveForm.get('proses')?.disable();      
      this.reactiveForm.get('status')?.disable();   
    }
    
  }

  // CHECKING APAKAH ID TELAH DIGUNAKAN
  checkKodeWIP (): boolean {
    if (this.dummyListID.find((id) => id === this.reactiveForm.get("idProses")?.value?.toUpperCase() )) {
      this.idProsesAlreadyExist = true;
      return true
    } else {
      this.idProsesAlreadyExist = false;
      return false
    }
  }

  uppercaseValue(colName: string) {
    this.reactiveForm.get(colName)?.valueChanges.subscribe(value => {
      if (value !== null) {
        this.reactiveForm.get(colName)?.patchValue(value.toUpperCase(), { emitEvent: false });
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
    if (pageName ==="list-proses") {
      this.router.navigate(['/master-data', 'proses', 'list-proses'])
    }
  }

  saveData() {
    if (this.action.name === 'add') {
      console.log(this.reactiveForm.value)
    }
  }
}
