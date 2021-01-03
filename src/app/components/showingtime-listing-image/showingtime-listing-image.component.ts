import { Component, ElementRef, Input, Renderer2 } from "@angular/core";
import { AfterViewInit, OnDestroy, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-showingtime-listing-image",
  templateUrl: "./showingtime-listing-image.component.html",
  styleUrls: ["./showingtime-listing-image.component.scss"],
})
export class ShowingtimeListingImageComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input("mode") mode: "cover" | "auto" = "cover";
  @Input("imgSrc") imgSrc!: string;
  @Input("imgErrorSrc") imgErrorSrc!: string;
  @Input("altText") altText!: string;
  @Input("minWidth") minWidth!: number;
  @Input("minHeight") minHeight!: number;
  @Input("maxWidth") maxWidth!: number;
  @Input("maxHeight") maxHeight!: number;
  @Input("height") height!: number;
  @Input("width") width!: number;
  @Input("radiusTopLeft") radiusTopLeft!: number;
  @Input("radiusTopRight") radiusTopRight!: number;
  @Input("radiusBottomLeft") radiusBottomLeft!: number;
  @Input("radiusBottomRight") radiusBottomRight!: number;

  public imageClass: string | null = null;

  private componentDestroyed$: Subject<boolean> = new Subject<boolean>();
  private hostElAspectRatio: number | null = null;
  private imageElAspectRatio: number | null = null;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private platform: Platform
  ) {}

  public ngOnInit(): void {}

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  public ngAfterViewInit(): void {
    this.initialSetup();
  }

  /* #region private methods */
  private initialSetup() {
    const minWidth = !!this.minWidth ? `${this.minWidth}px` : "auto";
    const minHeight = !!this.minHeight ? `${this.minHeight}px` : "auto";
    const maxWidth = !!this.maxWidth ? `${this.maxWidth}px` : "none";
    const maxHeight = !!this.maxHeight ? `${this.maxHeight}px` : "none";
    const height = !!this.height ? `${this.width}px` : "auto";
    const width = !!this.width ? `${this.width}px` : "auto";
    const radiusTopLeft = !!this.radiusTopLeft
      ? `${this.radiusTopLeft}px`
      : "0";
    const radiusTopRight = !!this.radiusTopRight
      ? `${this.radiusTopRight}px`
      : "0";
    const radiusBottomLeft = !!this.radiusBottomLeft
      ? `${this.radiusBottomLeft}px`
      : "0";
    const radiusBottomRight = !!this.radiusBottomRight
      ? `${this.radiusBottomRight}px`
      : "0";

    this.renderer.setStyle(this.elRef.nativeElement, "min-width", minWidth);
    this.renderer.setStyle(this.elRef.nativeElement, "min-height", minHeight);
    this.renderer.setStyle(this.elRef.nativeElement, "max-width", maxWidth);
    this.renderer.setStyle(this.elRef.nativeElement, "max-height", maxHeight);
    this.renderer.setStyle(this.elRef.nativeElement, "height", height);
    this.renderer.setStyle(this.elRef.nativeElement, "width", width);
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "border-top-left-radius",
      radiusTopLeft
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "border-top-right-radius",
      radiusTopRight
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "border-bottom-left-radius",
      radiusBottomLeft
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "border-bottom-right-radius",
      radiusBottomRight
    );

    this.adjustAppearance();

    this.platform.resize
      .pipe(takeUntil(this.componentDestroyed$), debounceTime(30))
      .subscribe(() => {
        this.adjustAppearance();
      });
  }

  private adjustAppearance(): void {
    if (
      !this.mode ||
      this.mode !== "cover" ||
      !this.elRef ||
      !this.elRef.nativeElement
    ) {
      return;
    }

    this.hostElAspectRatio =
      this.elRef.nativeElement.offsetWidth /
      this.elRef.nativeElement.offsetHeight;

    if (
      !!this.imageElAspectRatio &&
      this.imageElAspectRatio >= this.hostElAspectRatio
    ) {
      this.renderer.addClass(this.elRef.nativeElement, "st-cover-image-height");
      this.renderer.removeClass(
        this.elRef.nativeElement,
        "st-cover-image-width"
      );
    } else {
      this.renderer.addClass(this.elRef.nativeElement, "st-cover-image-width");
      this.renderer.removeClass(
        this.elRef.nativeElement,
        "st-cover-image-height"
      );
    }
  }
  /* #endregion */

  /* #region event handlers */
  public imageOnError(): void {
    if (this.imgErrorSrc) {
      this.imgSrc = this.imgErrorSrc;
    } else {
      this.imageClass = "st-hide-image";
    }
  }

  public imageOnLoad(event: CustomEvent): void {
    if (event && event.target) {
      const loadedImage = event.target as HTMLImageElement;
      this.imageElAspectRatio =
        loadedImage.naturalWidth / loadedImage.naturalHeight;
      this.adjustAppearance();
      this.renderer.addClass(
        this.elRef.nativeElement,
        "st-animate-image-opacity"
      );
    }
  }
  /* #endregion */
}
