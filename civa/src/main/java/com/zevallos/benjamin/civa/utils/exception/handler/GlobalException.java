package com.zevallos.benjamin.civa.utils.exception.handler;

import com.zevallos.benjamin.civa.utils.GeneralResponse;
import com.zevallos.benjamin.civa.utils.exception.custom.DataNotFound;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(DataNotFound.class)
    public ResponseEntity<GeneralResponse> exDataNotFound(DataNotFound dataNotFound) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(GeneralResponse.builder()
                        .message(dataNotFound.getMessage())
                        .data(null)
                        .build());
    }
}
