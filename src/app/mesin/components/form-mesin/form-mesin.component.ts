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

  formIsEdited = true
  noMesinAlreadyExist : boolean = false;

  // value key colName disini juga disesuaikan dengan nama key pada api
  validFormStatus = [
    {
      status : true,
      colName : "noMesin",
      disableCol : true,
    },
    {
      status : true,
      colName : "lokasiMesin",
      disableCol : true,
    },
    {
      status : true,
      colName : "kodeGrupMesin",
      disableCol : true,
    },
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
      colName : "gedung",
      disableCol : true,
    },
    {
      status : true,
      colName : "status",
      disableCol : true,
    },
  ]

  dummyEditValue = {
    noMesin : "TES",
    lokasiMesin : "deskripsi tes",
    kodeGrupMesin : "2",
    idProses : "1",
    proses : "One",
    gedung : "1",
    status : "Yes"
  }

  // dalam case menggunakan api, sesuaikan nama dari tiap form control (ex : noMesin), sesuai dengan nama key yang di dapat dari api, karena ini mempermudah saat patch value 
  reactiveForm = this.fb.group({
    noMesin: [{ value: '', disabled: true }, Validators.required],
    lokasiMesin: [{ value: '', disabled: true}, Validators.required],
    kodeGrupMesin: [{ value: '', disabled: true}, Validators.required],
    idProses: [{ value: '', disabled: true}, Validators.required],
    proses: [{ value: '', disabled: true}, Validators.required],
    gedung: [{ value: '', disabled: true}, Validators.required],
    status: [{ value: '', disabled: true}, Validators.required]
  });

  ngOnInit(): void {
      // CHECKING TIPE FORM
      this.activatedRoute.queryParams.subscribe( params => {
        this.reactiveForm.reset();
        this.action.name = params['action']
        if (this.action.name === "edit") {
          this.action.id = params['id']
          // untuk penggunakan api, panggil api untuk mendapatkan data dari detail disini berdasarkan id pada action.id kemudian masukan data yang di dapatkan ke dalam reactive form dengan  melakukan patchValue. Sebagai contoh, saya patchvalue dari data dummy
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
      this.uppercaseValue("noMesin");
      this.uppercaseValue('lokasiMesin')


      // CHECK VALIDASI PER KOLOM
      this.reactiveForm.get("noMesin")?.valueChanges.subscribe(() => {this.checkValidation(0)});
      this.reactiveForm.get("lokasiMesin")?.valueChanges.subscribe(() => {this.checkValidation(1)});
      this.reactiveForm.get("kodeGrupMesin")?.valueChanges.subscribe(() => {this.checkValidation(2)});
      this.reactiveForm.get("idProses")?.valueChanges.subscribe(() => {this.checkValidation(3)});
      this.reactiveForm.get("proses")?.valueChanges.subscribe(() => {this.checkValidation(4)});
      this.reactiveForm.get("gedung")?.valueChanges.subscribe(() => {this.checkValidation(5)});
      this.reactiveForm.get("status")?.valueChanges.subscribe(() => {this.checkValidation(6)});
      
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
      this.reactiveForm.get('lokasiMesin')?.enable();      
      this.reactiveForm.get('kodeGrupMesin')?.enable();      
      this.reactiveForm.get('gedung')?.enable();
      this.reactiveForm.get('status')?.enable();      
      this.reactiveForm.get('idProses')?.enable();
    } else {
      this.reactiveForm.get('lokasiMesin')?.disable();      
      this.reactiveForm.get('kodeGrupMesin')?.disable();      
      this.reactiveForm.get('gedung')?.enable();
      this.reactiveForm.get('status')?.disable();      
      this.reactiveForm.get('idProses')?.disable();
    }
    
  }

  // CHECKING APAKAH ID TELAH DIGUNAKAN
  checkKodeWIP (): boolean {
    if (this.dummyListID.find((id) => id === this.reactiveForm.get("noMesin")?.value?.toUpperCase() )) {
      this.noMesinAlreadyExist = true;
      return true
    } else {
      this.noMesinAlreadyExist = false;
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
    if (pageName ==="list-mesin") {
      this.router.navigate(['/master-data', 'mesin', 'list-mesin'])
    }
  }

  saveData() {
    if (this.action.name === 'add') {
      // panggil api untuk add, untuk mendapatkan value dari form, dapat dilakukan dengan this.reactiveForm.value
      console.log(this.reactiveForm.value)
    } else if (this.action.name === 'edit') {
      // metodenya sama seperti add, hanya api yang dipangil merupakan api edit
    }

    // setelah selesai menanbah atau mengedit kembalikan ke page sebelumnya,
    this.openPage('list-mesin')
  }
}
