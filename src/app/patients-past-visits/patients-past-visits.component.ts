import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsHistoryService } from '../patients-history.service';
import { jsPDF } from 'jspdf';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients-past-visits',
  templateUrl: './patients-past-visits.component.html',
  styleUrls: ['./patients-past-visits.component.css']
})
export class PatientsPastVisitsComponent implements OnInit {

  patientConsultancy: FormGroup;
  saved: boolean;
  patientHistory: any;
  medicineList: string[];
  downloadData: any;

  @ViewChild('consultancy') consultancy: ElementRef;

  constructor(private fb: FormBuilder, private patientHistoryService: PatientsHistoryService, private cd: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientConsultancy = this.fb.group({
      name: [this.route.snapshot.params['patientname'], Validators.required],
      date: [(new Date()).toISOString().substring(0, 10), Validators.required],
      age: ['', Validators.required],
      gender: ['Male', Validators.required],
      temperature: ['', Validators.required],
      bp: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      complaints: ['', Validators.required],
      tests: [''],
      comments: [''],
      // filename: [''],
      prescriptions: this.fb.array([])
    })

    this.patientHistoryService.getPatientHistory()
      .subscribe((data) => {
        this.patientHistory = data;
    });

    this.patientHistoryService.getMedicineList()
    .subscribe((data: any) => {
      this.medicineList = data;
    });
  }

  newMedicines(): FormGroup {
    return this.fb.group({
      medicineName: ['', Validators.required],
      dosage: ['', Validators.required],
      duration: ['', Validators.required],
      comments: ['']
    })
  }

  async makePdf(value: any) {
    this.downloadData = value;
    this.cd.detectChanges();
    let doc = new jsPDF();
    await doc.html(this.consultancy.nativeElement);
    doc.save('consultancy.pdf');
  }

  get prescriptions(): FormArray {
    return this.patientConsultancy.controls["prescriptions"] as FormArray;
  }

  addMedicine(): void {
    this.prescriptions.push(this.newMedicines());
  }

  save(): void {
    this.saved = true;
    console.log('DATA ', this.patientConsultancy.value);
    if (this.patientConsultancy.valid) {
      this.patientHistoryService.savePatientsConsultancyDetails(this.patientConsultancy.value)
        .subscribe((data) => {
          console.log('Subscribed Data ', data);
          this.patientHistory = [this.patientConsultancy.value, ...this.patientHistory];
        });
    }
  }
}
