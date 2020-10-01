import { ErrorHandler } from '@angular/core';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';
import { BadInput } from './bad-input';
import { throwError } from 'rxjs';


export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log(error);
        alert('An unexpected error occurred.');
    }

}
