import { ApiResponse, ApiResponseProperty } from "@nestjs/swagger";
import { ResponseStatus } from "./response-status.enum";

export class AppResponse {

    @ApiResponseProperty({ deprecated: true })
    status: boolean;

    @ApiResponseProperty()
    statusText: ResponseStatus;

    @ApiResponseProperty()
    message?: string;

    @ApiResponseProperty()
    data?: any[] | any;

}