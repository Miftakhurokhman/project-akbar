import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-grup-mesin',
  templateUrl: './form-grup-mesin.component.html',
  styleUrl: './form-grup-mesin.component.css'
})
export class FormGrupMesinComponent implements OnInit {

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
  kodeGrupMesinAlreadyExist : boolean = false;

  validFormStatus = [
    {
      status : true,
      colName : "kodeGrupMesin",
      disableCol : true,
    },
    {
      status : true,
      colName : "grupMesin",
      disableCol : true,
    },
    {
      status : true,
      colName : "proses",
      disableCol : true,
    },
    {
      status : true,
      colName : "idProses",
      disableCol : true,
    },
    {
      status : true,
      colName : "status",
      disableCol : true,
    },
  ]

  dummyEditValue = {
    kodeGrupMesin : "TES",
    grupMesin : "deskripsi tes",
    proses : "KODE TES",
    idProses : "1",
    status : "Yes"
  }

  reactiveForm = this.fb.group({
    kodeGrupMesin: [{ value: '', disabled: true }, Validators.required],
    grupMesin: [{ value: '', disabled: true}, Validators.required],
    proses: [{ value: '', disabled: true}, Validators.required],
    idProses: [{ value: '', disabled: true}, Validators.required],
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
          this.reactiveForm.get('proses')?.disable();
          // MEMBUAT BUTTON SAVE DISABLE SAAT VALUE DARI FORM TIDAK SESUAI
          this.reactiveForm.valueChanges.subscribe(() => {
            this.btnSaveDisable = this.checkKodeWIP() || this.reactiveForm.invalid;
          });

        }
      })

      this.reactiveForm.get('idProses')?.valueChanges.subscribe(value => {
        if (value == '1') {
          this.reactiveForm.get('proses')?.patchValue('One')
        } else if ( value == '2') {
          this.reactiveForm.get('proses')?.patchValue('Two')
        } else if (value == '3') {
          this.reactiveForm.get('proses')?.patchValue('Three')
        }
      })

      // UPPERCASE KODE WIP
      this.uppercaseValue("kodeGrupMesin");
      this.uppercaseValue('grupMesin')


      // CHECK VALIDASI PER KOLOM
      this.reactiveForm.get("kodeGrupMesin")?.valueChanges.subscribe(() => {this.checkValidation(0)});
      this.reactiveForm.get("grupMesin")?.valueChanges.subscribe(() => {this.checkValidation(1)});
      this.reactiveForm.get("proses")?.valueChanges.subscribe(() => {this.checkValidation(2)});
      this.reactiveForm.get("idProses")?.valueChanges.subscribe(() => {this.checkValidation(3)});
      this.reactiveForm.get("status")?.valueChanges.subscribe(() => {this.checkValidation(4)});
      
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
      this.reactiveForm.get('grupMesin')?.enable();      
      this.reactiveForm.get('status')?.enable();    
      this.reactiveForm.get('idProses')?.enable();
    } else {
      this.reactiveForm.get('grupMesin')?.disable();      
      this.reactiveForm.get('status')?.disable();      
      this.reactiveForm.get('idProses')?.disable();
    }
    
  }

  // CHECKING APAKAH ID TELAH DIGUNAKAN
  checkKodeWIP (): boolean {
    if (this.dummyListID.find((id) => id === this.reactiveForm.get("kodeGrupMesin")?.value?.toUpperCase() )) {
      this.kodeGrupMesinAlreadyExist = true;
      return true
    } else {
      this.kodeGrupMesinAlreadyExist = false;
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
    if (pageName ==="list-grup-mesin") {
      this.router.navigate(['/master-data', 'grup-mesin', 'list-grup-mesin'])
    }
  }

  saveData() {
    if (this.action.name === 'add') {
      console.log(this.reactiveForm.value)
    } else if (this.action.name === 'edit') {
      console.log(this.reactiveForm.value)
    }

    this.openPage('list-grup-mesin')
  }
}

