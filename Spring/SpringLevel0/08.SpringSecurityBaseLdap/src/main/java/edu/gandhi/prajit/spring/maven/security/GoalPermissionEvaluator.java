package edu.gandhi.prajit.spring.maven.security;

import java.io.Serializable;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;

public class GoalPermissionEvaluator implements PermissionEvaluator {
	/**
	 * CREATE TABLE `Permissions` ( `UserName` varchar(50) NOT NULL, `Target`
	 * varchar(50) NOT NULL, `Permission` varchar(50) NOT NULL, UNIQUE KEY
	 * `Ix_Perm_Username` (`UserName`,`Target`,`Permission`), CONSTRAINT
	 * `Fk_Permissions_Users` FOREIGN KEY (`UserName`) REFERENCES `users`
	 * (`UserName`) ),Inserted Role_Admin Data 'Prajit',
	 * 'edu.gandhi.prajit.spring.maven.model.Goal', 'createGoal'
	 */
	/**
	 * Use security:expression-handler Inside security:global-method-security
	 */
	private DataSource dataSource;

	public boolean hasPermission(Authentication authentication, Object targetDomainObject, Object permission) {
		final JdbcTemplate jdbcTemplate = new JdbcTemplate(getDataSource());
		final Object[] args = { ((User) authentication.getPrincipal()).getUsername(),
				targetDomainObject.getClass().getName(), permission.toString() };
		int count = jdbcTemplate.queryForObject(
				"Select Count(*) as 'exist' From Permissions permissions Where permissions.username = ? and permissions.target = ? and permissions.permission = ?",
				args, Integer.class);
		return count == 1;
	}

	public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType,
			Object permission) {
		return false;
	}

	/**
	 * @return the dataSource
	 */
	public DataSource getDataSource() {
		return dataSource;
	}

	/**
	 * @param dataSource
	 *            the dataSource to set
	 */
	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

}
