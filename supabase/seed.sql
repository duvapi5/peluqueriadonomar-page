-- ============================================
-- Seed Data para Peluquería Don Omar
-- ============================================

-- ============================================
-- Servicios iniciales
-- ============================================
INSERT INTO
    services (
        name,
        duration_min,
        price,
        active
    )
VALUES (
        'Corte Clásico',
        30,
        15000,
        true
    ),
    (
        'Corte Moderno',
        40,
        18000,
        true
    ),
    ('Afeitado', 25, 10000, true),
    ('Barba', 20, 8000, true),
    (
        'Corte Infantil',
        30,
        12000,
        true
    ),
    (
        'Servicio Premium',
        60,
        30000,
        true
    );

-- ============================================
-- Horarios de atención
-- Lunes a Sábado: 10:00-13:30 y 16:00-20:00
-- Domingo: Cerrado
-- ============================================

-- Lunes (1)
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        1,
        '10:00',
        '13:30',
        '16:00',
        '20:00',
        false
    );

-- Martes (2)
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        2,
        '10:00',
        '13:30',
        '16:00',
        '20:00',
        false
    );

-- Miércoles (3)
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        3,
        '10:00',
        '13:30',
        '16:00',
        '20:00',
        false
    );

-- Jueves (4)
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        4,
        '10:00',
        '13:30',
        '16:00',
        '20:00',
        false
    );

-- Viernes (5)
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        5,
        '10:00',
        '13:30',
        '16:00',
        '20:00',
        false
    );

-- Sábado (6)
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        6,
        '10:00',
        '13:30',
        '16:00',
        '20:00',
        false
    );

-- Domingo (0) - Cerrado
INSERT INTO
    business_hours (
        day_of_week,
        start_time,
        end_time,
        start_time_2,
        end_time_2,
        is_closed
    )
VALUES (
        0,
        '10:00',
        '13:30',
        NULL,
        NULL,
        true
    );