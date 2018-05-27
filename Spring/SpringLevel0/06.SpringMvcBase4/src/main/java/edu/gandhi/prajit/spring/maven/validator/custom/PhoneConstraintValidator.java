package edu.gandhi.prajit.spring.maven.validator.custom;

import java.util.Objects;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PhoneConstraintValidator implements ConstraintValidator<Phone, String> {
	@Override
	public void initialize(Phone constraintAnnotation) {

	}

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		if (Objects.isNull(value)) {
			return false;
		}
		return value.matches("[0-9()-]*");
	}
}
