package com.bhlog.bhlogback.util;

import org.slf4j.Logger;

import com.bhlog.bhlogback.response.Response;

public class ExceptionTreatment{
    public static void setExceptionMessage(String prefix, Exception e, Response<?> response, Logger log){
        String errorMsg = String.format("%s. %s. At line %d", e.getClass().getSimpleName(), e.getMessage(), e.getStackTrace()[0].getLineNumber());
        log.error(prefix + errorMsg);
        response.setError("Failure: Internal Server Error 500. " + errorMsg);
    }
}