package create.password.hash.md5;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.BlockJUnit4ClassRunner;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RunWith(BlockJUnit4ClassRunner.class)
public class CreatePasswordHashMd5 {
	@Test
	public void createMd5HashPasswordMd5() {
		System.out.println("Prajit:"+new Md5PasswordEncoder().encodePassword("Prajit",null));
		System.out.println("Gandhi:"+new Md5PasswordEncoder().encodePassword("Gandhi",null));
	}
	@Test
	public void createMd5HashPasswordBcrypt() {
		System.out.println("Prajit:"+new BCryptPasswordEncoder().encode("Prajit"));
		System.out.println("Gandhi:"+new BCryptPasswordEncoder().encode("Gandhi"));
	}
}
