import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DeletionConfirmDialogComponent } from 'src/app/components/dialogs/deletion-confirm-dialog/deletion-confirm-dialog.component';
import { SpringbootService } from 'src/app/services/springboot.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  pageSize = [10];
  columnas: string[] = ['Parameter', 'Value', 'Description', 'Created', 'Updated', 'Active', 'Actions'];
  dataSource:any;
  data: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private springBootService: SpringbootService, 
    public dialog: MatDialog, 
    private toastr: ToastrService,
    public dialogo: MatDialog) { }

    ngOnInit() {
      this.springBootService.findAllSettings().subscribe({
        next: (data :any) => {
          this.data = JSON.parse(JSON.stringify(data));
          this.dataSource = new MatTableDataSource<any>(data);
          this.dataSource.paginator = this.paginator;
        },
        error: error => { console.error(error) }    });
    }
    showDialog(): void {
      this.dialogo.open(DeletionConfirmDialogComponent, { data: {message: `¿Are you sure you want delete this record?`, title: 'Delete confirmation'}, width: '450px' })
        .afterClosed()
        .subscribe(
          (confirmed: Boolean) => {
          if (confirmed) {
            alert("Delete");
          } else {
            alert("Non deletion");
          }
        });
    }
}
