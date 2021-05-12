import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RemoveService } from 'src/app/services/remove.service';
import { Subscription } from 'rxjs';
import { RemoveDialogComponent } from '../../dialogs/remove-dialog/remove-dialog.component';

@Component({
  selector: 'crm-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent implements OnInit, OnDestroy {

  private messages: any = {
    cancel: 'Czy na pewno chcesz skasować wybrany produkt?',
    delete: 'Czy na pewno chcesz usunąć wybrane pozycje?'
  };

  @Input() view: 'compact' | 'full';
  @Input() action: 'cancel' | 'delete';
  @Input() module: string;
  @Input() elements: any[];

  private subscription: Subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private removeService: RemoveService
  ) {
  }

  ngOnInit() {
    this.setServiceValues();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private setServiceValues(): void {
    this.removeService.setModule(this.module);
    this.removeService.setAction(this.action);
  }

  doAction(): void {
    let config = {
      data: {
        message: this.messages[this.action],
        action: this.action
      }
    }

    let dialog = this.dialog.open(RemoveDialogComponent, config);

    dialog.afterClosed().subscribe(
      confirmed => this.afterDialogClosed(confirmed)
    );
  }

  private afterDialogClosed(confirmed: boolean): void {
    if (confirmed) {
      let idString: string = this.getElementsIdString();
      this.removeService.do(idString).subscribe();
    }
  }

  private getElementsIdString(): string {
    return this.elements
      .map(element => element.id)
      .reduce((prev, next) => `${prev}|${next}`);
  }
}
