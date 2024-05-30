package ${basePackageName}.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ${basePackageName}.entity.${entityName};

public interface ${entityName}Repository extends JpaRepository<${entityName}, Long> {

}
