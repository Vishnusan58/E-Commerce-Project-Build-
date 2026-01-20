package com.ecommerce.dto.response;

import com.ecommerce.enums.OrderStatus;
import com.ecommerce.enums.PaymentStatus;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderResponse {
    private Long id;
    private BigDecimal totalAmount;
    private BigDecimal discountAmount;
    private BigDecimal deliveryCharge;
    private BigDecimal finalAmount;
    private OrderStatus orderStatus;
    private PaymentStatus paymentStatus;
    private Instant orderDate;
    private Instant deliveryDate;
    private List<OrderItemResponse> items;

    @Getter
    @Setter
    public static class OrderItemResponse {
        private Long id;
        private Long productId;
        private String productName;
        private int quantity;
        private BigDecimal priceAtPurchase;
    }
}
