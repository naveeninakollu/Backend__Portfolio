package com.portback.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "PortPersonal")
public class Personal {
	private String name;
	private String email;
	private String phone;
	private String address1;
	private String address2;
	private String resume;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress1() {
		return address1;
	}
	public void setaddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getResume() {
		return resume;
	}
	public void setResume(String resume) {
		this.resume = resume;
	}
	
	@Override
	public String toString() {
		return "Personal [name=" + name + ", email=" + email + ", phone=" + phone + ", address1=" + address1
				+ ", address2=" + address2 + ", resume=" + resume + "]";
	}
	public Personal() {
		
	}
}
