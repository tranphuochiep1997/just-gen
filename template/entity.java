package ${basePackageName}.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
${entityImportContent}
import lombok.Data;

@Entity
@Table(name = "${tableName}")
@Data
public class ${entityName} {
${entityPropertiesContent}
}
