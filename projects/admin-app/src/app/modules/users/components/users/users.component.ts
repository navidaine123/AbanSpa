import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserData } from 'projects/admin-app/src/app/models/user/user-data-model';
import { UserService } from 'projects/shared-libraries/src/lib/services/http/user.service';
import { Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  dataSource: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['userId', 'userName', 'role'];
  private _onDestroy: BehaviorSubject<boolean>;
  constructor(private userService: UserService) {
    const users: UserData[] = [
      { userId: '1', userName: 'سسسس', role: 'تامین کننده' },
      { userId: '2', userName: 'شششش', role: 'کاربر' },
    ];
    this.dataSource = new MatTableDataSource(users);

    this._onDestroy = new BehaviorSubject<boolean>(false);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this._onDestroy.next(true);
    this._onDestroy.complete();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  edit(event: any) { }
  delete(event: any) { }
  addUser() { }

}
