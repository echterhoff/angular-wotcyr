import { catchError, map, tap, finalize, delay, timeout, retryWhen } from 'rxjs/operators';
import { AppError } from './../common/error-handling/app-error';
import { NotFoundError } from './../common/error-handling/not-found-error';
import { BadInput } from './../common/error-handling/bad-input';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class DataService<T> {
    // private url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private url: string, private http: HttpClient) { }

    getAll() {
        return this.http
            .get<T[]>(this.url)
            .pipe(
                catchError(this.handleError)
            );
    }

    create(resource: Partial<T>) {
        if (true === true)
            return throwError(new AppError());

        return this.http
            .post<T>(this.url, resource)
            .pipe(
                catchError(this.handleError)
            );
    }

    update(resource: { id: number }) {
        return this.http
            .patch<T>(this.url + '/' + resource.id, resource)
            .pipe(
                catchError(this.handleError)
            );
    }

    delete(id: number) {
        if (true === true)
            throwError(new AppError());
            
        return this.http
            .delete<void>(this.url + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: Response) {
        if (!error.ok && error.status === 400)
            return throwError(new BadInput(error))
        if (!error.ok && error.status === 404)
            return throwError(new NotFoundError(error));
        return throwError(new AppError(error));
    }
}