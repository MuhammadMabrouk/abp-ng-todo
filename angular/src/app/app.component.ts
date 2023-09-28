import { Component, OnInit } from '@angular/core';
import { LocalizationService, DomInsertionService, CONTENT_STRATEGY } from '@abp/ng.core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent implements OnInit {

  constructor(
    private localizationSer: LocalizationService,
    private domInsertionSer: DomInsertionService,
  ) {}

  ngOnInit() {
    // initialize app fonts
    this.initAppFonts();
  }

  // initialize app fonts
  initAppFonts() {
    let fontsStyle: HTMLStyleElement;

    const setFontsStyle = () => {
      fontsStyle = this.domInsertionSer.insertContent(
        CONTENT_STRATEGY.AppendStyleToHead(`
          @import url(${this.localizationSer.instant('::Font:Url')});
          body { font-family: ${this.localizationSer.instant('::Font:Family')}; }
        `)
      );
    };

    // set fonts style initially
    setFontsStyle();

    // set fonts style on language change
    this.localizationSer.languageChange$.subscribe(() => {
      fontsStyle && this.domInsertionSer.removeContent(fontsStyle);

      setFontsStyle();
    });
  }
}
