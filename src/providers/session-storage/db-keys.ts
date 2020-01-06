import { Injectable } from '@angular/core';

@Injectable()
export class DBkeys {

    // Manejo del usuario
    public static readonly CURRENT_USER = 'current_user';
    public static readonly CURRENT_USER_IMAGE = 'current_user_image';
    public static readonly USER_PERMISSIONS = 'user_permissions';


    // Manejo de Token
    public static readonly ACCESS_TOKEN = 'access_token';
    public static readonly ID_TOKEN = 'id_token';
    public static readonly REFRESH_TOKEN = 'refresh_token';
    public static readonly TOKEN_EXPIRES_IN = 'expires_in';

    // Manejo del Tutorial
    public static readonly HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

    // Controlar si el usuario ya hizo login
    public static readonly HAS_LOGGED_IN = 'hasLoggedIn';


    // Manejo de Datos del usuario
    public static readonly STORED_DATA_USER = 'storedDataUser';

    // Manejo de Datos del dispositivo
    public static readonly STORED_IMEI_PHONE = 'storedIMEI';
    public static readonly STORED_SO_PHONE = 'storedSO';
    public static readonly STORED_MODEL_PHONE = 'storedMODEL';
    public static readonly STORED_CARRIER_PHONE = 'storedCARRIER';


    // Manejo de Términos y condiciones
    public static readonly STORED_CONDITIONS = 'storedConditions';

    // Manejo de Errores
    // public static readonly Error_login = "storedDataError";

    // Manejo de Reload App
    public static readonly HAS_MADE_RELOAD = 'hasMadeReload';

     // Almacena array de notificaciones
     public static readonly NOTIFICATION = 'notification';
}
