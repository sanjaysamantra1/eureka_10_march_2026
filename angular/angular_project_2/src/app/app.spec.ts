import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeAll(() => {
    console.log('Before All...'); // 1 time initializations
  });
  // Test Suite
  beforeEach(async () => {
    console.log('beforeEach...');
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });
  afterEach(() => {
    console.log('After Each...');
  });
  afterAll(() => {
    console.log('After All...');
  });

  it('should create the app', () => {
    console.log('It-1');
    // Test Case
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    console.log('It-2');
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_2');
  });

  it('should verify add function', () => {
    console.log('It-3');
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.add(10, 20)).toBe(30);
    expect(app.add(10, -20)).toBe(-10);
    expect(app.add(-10, -20)).toBe(-30);
    expect(app.add(-10, 20)).toBe(10);
  });

  it('should verify sumofdigits function', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.sumOfDigits(125)).toBe(8);
  });

  it('should verify addNewCar function', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars).toBeInstanceOf(Array);
    expect(app.cars.length).toBe(2);
    expect(app.cars).toContain('Tata');
    expect(app.cars).not.toContain('Maruti');
    expect(app.cars).toEqual(['Tata', 'Honda']);
    app.addNewCar('Maruti');
    expect(app.cars).toBeDefined();
    expect(app.cars).toBeInstanceOf(Array);
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('Tata');
    expect(app.cars).toContain('Maruti');
    expect(app.cars).not.toContain('Audi');
    expect(app.cars).toEqual(['Tata', 'Honda', 'Maruti']);
  });

  it('should call processData with the correct data', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    
    const processDataSpy = vi.spyOn(app, 'processData'); // Spy For processData function
    const result = app.fetchData();
    expect(processDataSpy).toHaveBeenCalled(); // Verify processData was called
    expect(processDataSpy).toHaveBeenCalledWith(['item1', 'item2', 'item3']); // Verify correct arguments
    expect(result).toBe(3); // Verify the return value
  });
});
