package com.ecommerce.dto.response;

import com.ecommerce.enums.UserRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private Long id;
    private String email;
    private String name;
    private UserRole role;
    private boolean active;
}
