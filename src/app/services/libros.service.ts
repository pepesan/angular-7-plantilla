/**
 * API de Libros en MongoDB
 * Api Rest de Ejemplo con Libros
 *
 * OpenAPI spec version: 1.0.0
 * Contact: pepesan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { GetLibroResponse } from '../models/getLibroResponse';
import { GetLibrosResponse } from '../models/getLibrosResponse';
import { Libro } from '../models/libro';
import { LibroSinID } from '../models/libroSinID';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class LibrosService {

    protected basePath = 'http://localhost:3000/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Añade un Libro
     * @param body Objeto de Libro
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addLibro(body: LibroSinID, observe?: 'body', reportProgress?: boolean): Observable<GetLibroResponse>;
    public addLibro(body: LibroSinID, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetLibroResponse>>;
    public addLibro(body: LibroSinID, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetLibroResponse>>;
    public addLibro(body: LibroSinID, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addLibro.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<GetLibroResponse>(`${this.basePath}/libros`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Borrar un libro
     * Borrado de un libro por su ID
     * @param id ID del libro
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteLibro(id: string, observe?: 'body', reportProgress?: boolean): Observable<GetLibroResponse>;
    public deleteLibro(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetLibroResponse>>;
    public deleteLibro(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetLibroResponse>>;
    public deleteLibro(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteLibro.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<GetLibroResponse>(`${this.basePath}/libros/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Coge un libro por su ID
     * 
     * @param id ID del libro
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLibroById(id: string, observe?: 'body', reportProgress?: boolean): Observable<GetLibroResponse>;
    public getLibroById(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetLibroResponse>>;
    public getLibroById(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetLibroResponse>>;
    public getLibroById(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLibroById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<GetLibroResponse>(`${this.basePath}/libros/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Obtener listado de libros
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLibros(observe?: 'body', reportProgress?: boolean): Observable<GetLibrosResponse>;
    public getLibros(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetLibrosResponse>>;
    public getLibros(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetLibrosResponse>>;
    public getLibros(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<GetLibrosResponse>(`${this.basePath}/libros`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Modificar un Libro Existente
     * 
     * @param id ID del libro
     * @param body Objeto de Libro para modificar el usuario con ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateLibro(id: string, body: Libro, observe?: 'body', reportProgress?: boolean): Observable<GetLibroResponse>;
    public updateLibro(id: string, body: Libro, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetLibroResponse>>;
    public updateLibro(id: string, body: Libro, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetLibroResponse>>;
    public updateLibro(id: string, body: Libro, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateLibro.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateLibro.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<GetLibroResponse>(`${this.basePath}/libros/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
