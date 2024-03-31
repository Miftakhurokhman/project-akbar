import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-spec-parameter',
  templateUrl: './form-spec-parameter.component.html',
  styleUrl: './form-spec-parameter.component.css'
})
export class FormSpecParameterComponent implements OnInit {
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
      colName: 'kodeGrupMesin',
      disableCol: true,
    },
    {
      status: true,
      colName: 'grupMesin',
      disableCol: true,
    },
    {
      status: true,
      colName: 'idProses',
      disableCol: true,
    },
    {
      status: true,
      colName: 'revisi',
      disableCol: true,
    },
    {
      status: true,
      colName: 'beginDate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'endDate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'status',
      disableCol: true,
    },
    {
      status: true,
      colName: 'withFormer',
      disableCol: true,
    },
    {
      status: true,
      colName: 'totalWithFormer',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomWidthFormer',
      disableCol: true,
    },
    {
      status: true,
      colName: 'defiate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolDefiate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomDefiate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'infiate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolInfiate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomInfiate',
      disableCol: true,
    },
    {
      status: true,
      colName: 'beadRing',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolBeadRing',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomBeadRing',
      disableCol: true,
    },
    {
      status: true,
      colName: 'jarakUsrStopHump',
      disableCol: true,
    },
    {
      status: true,
      colName: 'totalJarakUsrStopHump',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomJarakUsrStopHump',
      disableCol: true,
    },
    {
      status: true,
      colName: 'jarakUsrStopEnd',
      disableCol: true,
    },

    
    {
      status: true,
      colName: 'tolJarakUsrStopEnd',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomJarakUsrStopEnd',
      disableCol: true,
    },
    {
      status: true,
      colName: 'setLampPly1',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomSetLampPly1',
      disableCol: true,
    },
    {
      status: true,
      colName: 'setLampPly2',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomSetLampPly2',
      disableCol: true,
    },
    {
      status: true,
      colName: 'sticherHighPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolSticherHighPress',
      disableCol: true,
    },

    
    {
      status: true,
      colName: 'uomSticherHighPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'sticherLowPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolSticherLowPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomSticherLowPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'centerRollPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'tolCenterRollPress',
      disableCol: true,
    },
    {
      status: true,
      colName: 'uomCenterRollPress',
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
    kodeGrupMesin: [{ value: '', disabled: true }, Validators.required],
    grupMesin: [{ value: '', disabled: true }, Validators.required],
    idProses: [{ value: '', disabled: true }, Validators.required],
    revisi: [{ value: '', disabled: true }, Validators.required],
    beginDate: [{ value: '', disabled: true }, Validators.required],
    endDate: [{ value: '', disabled: true }, Validators.required],
    status: [{ value: '', disabled: true }, Validators.required],
    withFormer: [{ value: '', disabled: true }, Validators.required],
    totalWithFormer: [{ value: '', disabled: true }, Validators.required],
    uomWidthFormer: [{ value: '', disabled: true }, Validators.required],
    defiate: [{ value: '', disabled: true }, Validators.required],
    tolDefiate: [{ value: '', disabled: true }, Validators.required],
    uomDefiate: [{ value: '', disabled: true }, Validators.required],
    infiate: [{ value: '', disabled: true }, Validators.required],
    tolInfiate: [{ value: '', disabled: true }, Validators.required],
    uomInfiate: [{ value: '', disabled: true }, Validators.required],
    beadRing: [{ value: '', disabled: true }, Validators.required],
    tolBeadRing: [{ value: '', disabled: true }, Validators.required],
    uomBeadRing: [{ value: '', disabled: true }, Validators.required],
    jarakUsrStopHump: [{ value: '', disabled: true }, Validators.required],
    totalJarakUsrStopHump: [{ value: '', disabled: true }, Validators.required],
    uomJarakUsrStopHump: [{ value: '', disabled: true }, Validators.required],
    jarakUsrStopEnd: [{ value: '', disabled: true }, Validators.required],

    
    tolJarakUsrStopEnd: [{ value: '', disabled: true }, Validators.required],
    uomJarakUsrStopEnd: [{ value: '', disabled: true }, Validators.required],
    setLampPly1: [{ value: '', disabled: true }, Validators.required],
    uomSetLampPly1: [{ value: '', disabled: true }, Validators.required],
    setLampPly2: [{ value: '', disabled: true }, Validators.required],
    uomSetLampPly2: [{ value: '', disabled: true }, Validators.required],
    sticherHighPress: [{ value: '', disabled: true }, Validators.required],
    tolSticherHighPress: [{ value: '', disabled: true }, Validators.required],

    
    uomSticherHighPress: [{ value: '', disabled: true }, Validators.required],
    sticherLowPress: [{ value: '', disabled: true }, Validators.required],
    tolSticherLowPress: [{ value: '', disabled: true }, Validators.required],
    uomSticherLowPress: [{ value: '', disabled: true }, Validators.required],
    centerRollPress: [{ value: '', disabled: true }, Validators.required],
    tolCenterRollPress: [{ value: '', disabled: true }, Validators.required],
    uomCenterRollPress: [{ value: '', disabled: true }, Validators.required],
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
    this.validFormStatus.forEach((form, index) => {
      this.reactiveForm.get(form.colName)?.valueChanges.subscribe(() => {
        this.checkValidation(index);
      });
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
    if (pageName === 'list-spec-parameter') {
      this.router.navigate(['/master-data', 'spec-parameter', 'list-spec-parameter']);
    }
  }

  saveData() {
    if (this.action.name === 'add') {
      console.log(this.reactiveForm);
    } else if (this.action.name === 'edit') {
      console.log(this.reactiveForm.value)
    }

    this.openPage('list-spec-parameter')
  }
}

