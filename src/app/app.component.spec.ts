import { render, screen } from '@testing-library/angular';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LibsTestComponent } from 'projects/libs-test/src/lib/libs-test.component';
import {LibsTestModule} from '../../projects/libs-test/src/lib/libs-test.module';

/** test1 in root app */
/*describe('AppComponent', () => {
  it('just init', async () => {
    await render(AppComponent, {
      imports: [ AppModule ],
      excludeComponentDeclaration: true,
      componentProviders: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    });

    expect(screen.getByText('TEST'));
  });
});*/

/** test2 in lib */
describe('LibsTestComponent', () => {
  it('just init', async () => {
    await render(LibsTestComponent, {
      imports: [ LibsTestModule ],
      excludeComponentDeclaration: true,
      componentProviders: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    });

    expect(screen.getByText('libs-test works!'));
  });
});
