package com.ecommerce.dto.request;

import com.ecommerce.enums.PaymentMethod;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequest {
    @NotNull
    private Long orderId;

    @NotNull
    private PaymentMethod paymentMethod;

    private String cardNumber;
}
