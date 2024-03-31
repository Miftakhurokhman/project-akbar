import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-spec-dimensi',
  templateUrl: './form-spec-dimensi.component.html',
  styleUrl: './form-spec-dimensi.component.css',
})
export class FormSpecDimensiComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  btnSaveDisable: boolean = true;
  action = {
    id: '',
    name: '',
  };

  dummyListID = ['HALO', 'TES', '123'];

  formIsEdited = true;
  kodeWipAlreadyExist: boolean = false;

  validFormStatus = [
    {
      status: true,
      colName: 'kodeWIP',
      disableCol: true,
    },
    {
      status: true,
      colName: 'idProses',
      disableCol: true,
    },
    {
      status: true,
      colName: 'revisiDimensi',
      disableCol: true,
    },
    {
      status: true,
      colName: 'beginDateDimensi',
      disableCol: true,
    },
    {
      status: true,
      colName: 'endDateDimensi',
      disableCol: true,
    },
    {
      status: true,
      colName: 'status',
      disableCol: true,
    },
    {
      status: true,
      colName: 'panjangTread',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolPanjangTread',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomPanjangTread',
      disableCol: true,
    },
    {
      status: true,
      colName: 'lebarTread',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolLebarTread',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomLebarTread',
      disableCol: true,
    },
    {
      status: true,
      colName: 'lebarPly01',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolLebarPly01',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomLebarPly01',
      disableCol: true,
    },
    {
      status: true,
      colName: 'turnUp',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolTurnUp',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomTurnUp',
      disableCol: true,
    },
    {
      status: true,
      colName: 'treadEnd',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolTreadEnd',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomTreadEnd',
      disableCol: true,
    },
    {
      status: true,
      colName: 'beratGT',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolBeratGT',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomBeratGT',
      disableCol: true,
    },
  ];

  dummyEditValue = {
    kodeWIP: 'TES',
    deskripsi: 'deskripsi tes',
    uomWIP: 'KODE TES',
    idProses: '1',
    status: 'Yes',
  };

  reactiveForm = this.fb.group({
    kodeWIP: [{ value: '', disabled: true }, Validators.required],

    idProses: [{ value: '', disabled: true }, Validators.required],

    revisiDimensi: [{ value: '', disabled: true }, Validators.required],

    beginDateDimensi: [{ value: '', disabled: true }, Validators.required],

    endDateDimensi: [{ value: '', disabled: true }, Validators.required],

    status: [{ value: '', disabled: true }, Validators.required],

    panjangTread: [{ value: '', disabled: true }, Validators.required],

    tolPanjangTread: [{ value: '', disabled: true }, Validators.required],

    uomPanjangTread: [{ value: '', disabled: true }, Validators.required],

    lebarTread: [{ value: '', disabled: true }, Validators.required],

    tolLebarTread: [{ value: '', disabled: true }, Validators.required],

    uomLebarTread: [{ value: '', disabled: true }, Validators.required],

    lebarPly01: [{ value: '', disabled: true }, Validators.required],

    tolLebarPly01: [{ value: '', disabled: true }, Validators.required],

    uomLebarPly01: [{ value: '', disabled: true }, Validators.required],

    turnUp: [{ value: '', disabled: true }, Validators.required],

    tolTurnUp: [{ value: '', disabled: true }, Validators.required],

    uomTurnUp: [{ value: '', disabled: true }, Validators.required],

    treadEnd: [{ value: '', disabled: true }, Validators.required],

    tolTreadEnd: [{ value: '', disabled: true }, Validators.required],

    uomTreadEnd: [{ value: '', disabled: true }, Validators.required],

    beratGT: [{ value: '', disabled: true }, Validators.required],

    tolBeratGT: [{ value: '', disabled: true }, Validators.required],

    uomBeratGT: [{ value: '', disabled: true }, Validators.required],
  });

  ngOnInit(): void {
    // CHECKING TIPE FORM
    this.activatedRoute.queryParams.subscribe((params) => {
      this.reactiveForm.reset();
      this.action.name = params['action'];
      if (this.action.name === 'edit') {
        this.reactiveForm.patchValue(this.dummyEditValue);
        this.formIsEdited = false;
        // MEMBUAT BUTTON SAVE DISABLE SAAT VALUE DARI FORM TIDAK SESUAI
        this.reactiveForm.valueChanges.subscribe(() => {
          this.btnSaveDisable = !this.formIsEdited || this.reactiveForm.invalid;
        });
      } else if (this.action.name === 'add') {
        this.reactiveForm.enable();
        this.reactiveForm.get('status')?.disable();
        this.reactiveForm.get('status')?.patchValue('Yes');
        // MEMBUAT BUTTON SAVE DISABLE SAAT VALUE DARI FORM TIDAK SESUAI
        this.reactiveForm.valueChanges.subscribe(() => {
          this.btnSaveDisable = this.reactiveForm.invalid;
        });
      }
    });

    // UPPERCASE KODE WIP
    this.uppercaseValue('revisiDimensi');

    // CHECK VALIDASI PER KOLOM
    this.reactiveForm.get('kodeWIP')?.valueChanges.subscribe(() => {
      this.checkValidation(0);
    });
    this.reactiveForm.get('idProses')?.valueChanges.subscribe(() => {
      this.checkValidation(1);
    });
    this.reactiveForm.get('revisiDimensi')?.valueChanges.subscribe(() => {
      this.checkValidation(2);
    });
    this.reactiveForm.get('beginDateDimensi')?.valueChanges.subscribe(() => {
      this.checkValidation(3);
    });
    this.reactiveForm.get('endDateDimensi')?.valueChanges.subscribe(() => {
      this.checkValidation(4);
    });
    this.reactiveForm.get('status')?.valueChanges.subscribe(() => {
      this.checkValidation(5);
    });
    this.reactiveForm.get('panjangTread')?.valueChanges.subscribe(() => {
      this.checkValidation(6);
    });
    this.reactiveForm.get('tolPanjangTread')?.valueChanges.subscribe(() => {
      this.checkValidation(7);
    });
    this.reactiveForm.get('uomPanjangTread')?.valueChanges.subscribe(() => {
      this.checkValidation(8);
    });
    this.reactiveForm.get('lebarTread')?.valueChanges.subscribe(() => {
      this.checkValidation(9);
    });
    this.reactiveForm.get('tolLebarTread')?.valueChanges.subscribe(() => {
      this.checkValidation(10);
    });
    this.reactiveForm.get('uomLebarTread')?.valueChanges.subscribe(() => {
      this.checkValidation(11);
    });
    this.reactiveForm.get('lebarPly01')?.valueChanges.subscribe(() => {
      this.checkValidation(12);
    });
    this.reactiveForm.get('tolLebarPly01')?.valueChanges.subscribe(() => {
      this.checkValidation(13);
    });
    this.reactiveForm.get('uomLebarPly01')?.valueChanges.subscribe(() => {
      this.checkValidation(14);
    });
    this.reactiveForm.get('turnUp')?.valueChanges.subscribe(() => {
      this.checkValidation(15);
    });
    this.reactiveForm.get('tolTurnUp')?.valueChanges.subscribe(() => {
      this.checkValidation(16);
    });
    this.reactiveForm.get('uomTurnUp')?.valueChanges.subscribe(() => {
      this.checkValidation(17);
    });
    this.reactiveForm.get('treadEnd')?.valueChanges.subscribe(() => {
      this.checkValidation(18);
    });
    this.reactiveForm.get('tolTreadEnd')?.valueChanges.subscribe(() => {
      this.checkValidation(19);
    });
    this.reactiveForm.get('uomTreadEnd')?.valueChanges.subscribe(() => {
      this.checkValidation(20);
    });
    this.reactiveForm.get('beratGT')?.valueChanges.subscribe(() => {
      this.checkValidation(21);
    });
    this.reactiveForm.get('tolBeratGT')?.valueChanges.subscribe(() => {
      this.checkValidation(22);
    });
    this.reactiveForm.get('uomBeratGT')?.valueChanges.subscribe(() => {
      this.checkValidation(23);
    });
  }

  setFormStatus() {
    this.formIsEdited = !this.formIsEdited;

    if (this.formIsEdited) {
      if (!this.reactiveForm.invalid) {
        this.btnSaveDisable = false;
      }
    } else {
      this.btnSaveDisable = true;
    }
    if (this.formIsEdited) {
      this.reactiveForm.enable()
    } else {
      this.reactiveForm.disable()
    }
  }

  // CHECKING APAKAH ID TELAH DIGUNAKAN
  checkKodeWIP(): boolean {
    if (
      this.dummyListID.find(
        (id) => id === this.reactiveForm.get('kodeWIP')?.value?.toUpperCase()
      )
    ) {
      this.kodeWipAlreadyExist = true;
      return true;
    } else {
      this.kodeWipAlreadyExist = false;
      return false;
    }
  }

  uppercaseValue(colName: string) {
    this.reactiveForm.get(colName)?.valueChanges.subscribe((value) => {
      if (value !== null) {
        this.reactiveForm
          .get(colName)
          ?.patchValue(value.toUpperCase(), { emitEvent: false });
      }
    });
  }

  checkValidation(index: number) {
    const value = this.reactiveForm.get(this.validFormStatus[index].colName);

    if (value?.invalid) {
      this.validFormStatus[index].status = false;
    } else {
      this.validFormStatus[index].status = true;
    }
  }

  openPage(pageName: string) {
    if (pageName === 'list-spec-dimensi') {
      this.router.navigate(['/master-data', 'spec-dimensi', 'list-spec-dimensi']);
    }
  }

  saveData() {
    if (this.action.name === 'add') {
      console.log(this.reactiveForm);
    } else if (this.action.name === 'edit') {
      console.log(this.reactiveForm);
    }
  }
}
