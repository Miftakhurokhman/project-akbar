import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-activitas',
  templateUrl: './form-activitas.component.html',
  styleUrl: './form-activitas.component.css'
})
export class FormActivitasComponent implements OnInit {

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
  idActivitasAlreadyExist : boolean = false;

  validFormStatus = [
    {
      status : true,
      colName : "idActivitas",
      disableCol : true,
    },
    {
      status : true,
      colName : "activitas",
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
    idActivitas : "TES",
    activitas : "deskripsi tes",
    idProses : "1",
    status : "Yes"
  }

  reactiveForm = this.fb.group({
    idActivitas: [{ value: '', disabled: true }, Validators.required],
    activitas: [{ value: '', disabled: true}, Validators.required],
    idProses: [{ value: '', disabled: true}, Validators.required],
    status: [{ value: '', disabled: true}, Validators.required]
  });

  ngOnInit(): void {
      // CHECKING TIPE FORM
      this.activatedRoute.queryParams.subscribe( params => {
        this.reactiveForm.reset();
        this.action.name = params['action']
        if (this.action.name === "edit") {
          this.action.id = params['id']
          // panggil api untuk mendapatkan data dari id tersebut
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
      this.uppercaseValue("idActivitas");
      this.uppercaseValue('activitas')


      // CHECK VALIDASI PER KOLOM
      this.reactiveForm.get("idActivitas")?.valueChanges.subscribe(() => {this.checkValidation(0)});
      this.reactiveForm.get("activitas")?.valueChanges.subscribe(() => {this.checkValidation(1)});
      this.reactiveForm.get("idProses")?.valueChanges.subscribe(() => {this.checkValidation(2)});
      this.reactiveForm.get("status")?.valueChanges.subscribe(() => {this.checkValidation(3)});
      
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
      this.reactiveForm.get('activitas')?.enable();      
      this.reactiveForm.get('status')?.enable();      
      this.reactiveForm.get('idProses')?.enable();
    } else {     
      this.reactiveForm.get('activitas')?.disable();      
      this.reactiveForm.get('status')?.disable();      
      this.reactiveForm.get('idProses')?.disable();
    }
    
  }

  // CHECKING APAKAH ID TELAH DIGUNAKAN
  checkKodeWIP (): boolean {
    if (this.dummyListID.find((id) => id === this.reactiveForm.get("idActivitas")?.value?.toUpperCase() )) {
      this.idActivitasAlreadyExist = true;
      return true
    } else {
      this.idActivitasAlreadyExist = false;
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
    if (pageName ==="list-activitas") {
      this.router.navigate(['/master-data', 'activitas', 'list-activitas'])
    }
  }

  saveData() {
    if (this.action.name === 'add') {
      // panggil api untuk add
      console.log(this.reactiveForm.value)
    } else if (this.action.name === 'edit') {
      // panggil api untuk edit
    }

    // setelah selesai menanbah atau mengedit kembalikan ke page sebelumnya,
    this.openPage('list-activitas')
  }
}
