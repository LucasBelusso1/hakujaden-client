export const API_URL = "http://localhost:3333";

export function AUTENTICATE_POST(body) {
    return {
        url: API_URL + "/autenticate",
        options: {
            method: "POST",
            data: body,
        },
    };
}

export function USER_POST(body) {
    return {
        url: API_URL + "/user",
        options: {
            method: "POST",
            data: body,
        },
    };
}

export function USER_GET(token) {
    return {
        url: API_URL + "/user",
        options: {
            method: "GET",
        },
        config: {
            headers: { Authorization: `Bearer ${token}` },
        },
    };
}

export function PHOTO_POST(token, formData) {
    return {
        url: API_URL + "/photo",
        options: {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: formData,
        },
    };
}

export function PHOTOS_GET() {
    return {
        url: `${API_URL}/photo`,
        options: {
            method: "GET",
            cache: "no-store",
        },
    };
}

export function PHOTO_GET(id) {
    return {
        url: `${API_URL}/photo/${id}/comments`,
        options: {
            method: "GET",
            cache: "no-store",
        },
    };
}

export function COMMENT_POST(body, token) {
    return {
        url: API_URL + `/comment`,
        options: {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
            data: JSON.stringify(body),
        },
    };
}

export function PHOTO_DELETE(id, token) {
    return {
        url: `${API_URL}/photo/${id}`,
        options: {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
    };
}