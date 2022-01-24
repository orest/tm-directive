import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type NewType = DomSanitizer;

@Component({
  selector: 'app-cws-target-banner',
  templateUrl: './cws-target-banner.component.html',
  styleUrls: ['./cws-target-banner.component.scss'],
})
export class CwsTargetBannerComponent implements OnInit {
  @Input() targetMessage;
  dynamicHtml: SafeHtml = null;
  constructor(private sanitized: DomSanitizer,) { }
  ngOnInit() {
    this.dynamicHtml = this.sanitized.bypassSecurityTrustHtml(this.targetMessage.message);
  }
}
