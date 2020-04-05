/* TYPESCRIPT */
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ResponsiveService {
	
	constructor() {
		window.onresize = this.callSubscribers
	}
	
	private callbacks: Function[] = [];
	
	// taken from bootstrap's grid system
	private breakpoints = {
		xs: '(max-width:575px)',
		sm: '(min-width:576px) and (max-width:767px)',
		md: '(min-width:768px) and (max-width:991px)',
		lg: '(min-width:992px) and (max-width:1199px)',
		xl: '(min-width:1200px)'
	};
	
	private xsOrs = this.breakpoints.xs + ',' + this.breakpoints.sm;
	
	public isXS = () => this.ruleIsMet(this.breakpoints.xs);
	public isSM = () => this.ruleIsMet(this.breakpoints.sm);
	public isMD = () => this.ruleIsMet(this.breakpoints.md);
	public isLG = () => this.ruleIsMet(this.breakpoints.lg);
	public isXL = () => this.ruleIsMet(this.breakpoints.xl);
	
	public isSmallScreen =  () => this.ruleIsMet(this.xsOrs);
	
	public registerChangeCallback = (f: Function) => {
		this.callbacks.push(f);
	}
	
	private ruleIsMet = (rule: string) => window.matchMedia(rule).matches;
	
	private callSubscribers = () => {
		let len = this.callbacks.length;
		
		if(len == 0) {
			return;
		}
		
		let i = 0;
		
		for(;i < len; i++) {
			this.callbacks[i]();
		}
	}

	/**
	 * define values
	 * @param object
	 */
	public define( values: DevicesBreakpoints ) {
		if ( this.isXS() ) {
			return values.xs;
		} else if ( this.isSM() ) {
			return values.sm;
		} else if ( this.isMD() ) {
			return values.md;
		} else if ( this.isLG() ) {
			return values.lg;
		} else if ( this.isXL() ) {
			return values.xl;
		}
	}
}

export interface DevicesBreakpoints {
	xl : string;
	lg : string;
	md : string;
	sm : string;
	xs : string;
}