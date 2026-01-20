package com.ecommerce.dto.response;

import java.math.BigDecimal;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartResponse {
    private Long id;
    private List<CartItemResponse> items;
    private BigDecimal total;

    @Getter
    @Setter
    public static class CartItemResponse {
        private Long id;
        private Long productId;
        private String productName;
        private int quantity;
        private BigDecimal price;
    }
}
