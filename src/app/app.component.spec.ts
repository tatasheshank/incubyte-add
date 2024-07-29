import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
   
    expect(app).toBeTruthy();
  });

  it('should add comma separated values in a string',()=>{
    const result = app.addValues('1,2,3');
    expect(result).toEqual(6);
  })

  it('should give 0 as result if input is having empty string',()=>{
    const result = app.addValues('');
    expect(result).toEqual(0);
  })

  it('should give single value in int if input having no delimiters and has single value',()=>{
    const result = app.addValues('123');
    expect(result).toEqual(123);
  })

  it('should add comma separated values in a string with semi coloumn as delimiter',()=>{
    const result = app.addValues(`1;2;3`);
    expect(result).toEqual(6);
  })

  it('should add comma separated values in a string with semi coloumn as delimiter on next lines also',()=>{
    const result = app.addValues(`1\\n;2;3`);
    expect(result).toEqual(6);
  })

  it('should throw error on negative numbers',()=>{
    try{
      const result = app.addValues('-1,-2,-3');
    }catch(e){
      expect(e.message).toEqual(`negative numbers not allowed -1,-2,-3`)
    }
  })
 
});
