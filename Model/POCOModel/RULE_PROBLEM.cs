//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class RULE_PROBLEM
	{
		public RULE_PROBLEM ToPOCO(bool isPOCO = true){
			return new RULE_PROBLEM(){
				PKID = this.PKID,
				DEPT_CODE = this.DEPT_CODE,
				INSPECTOR = this.INSPECTOR,
				INSPECT_DEPT_CODE = this.INSPECT_DEPT_CODE,
				INSPECT_POST = this.INSPECT_POST,
				INSPECT_TIME = this.INSPECT_TIME,
				PROBLEM = this.PROBLEM,
				PROFESSION_CAT = this.PROFESSION_CAT,
				PROBLEM_NATURE = this.PROBLEM_NATURE,
				PROBLEM_LEVEL = this.PROBLEM_LEVEL,
				SCORE = this.SCORE,
				RECTIFICATION_DEADLINE = this.RECTIFICATION_DEADLINE,
				RECTIFICATION_STATUS = this.RECTIFICATION_STATUS,
				RECTIFICATION_DESC = this.RECTIFICATION_DESC,
				BULLETIN_NO = this.BULLETIN_NO,
				CHIEF_INSTR = this.CHIEF_INSTR,
				DIRECTOR_INSTR = this.DIRECTOR_INSTR,
				ORTHER = this.ORTHER,
				ANALYSIS_FLAG = this.ANALYSIS_FLAG,
				DOC_FLAG = this.DOC_FLAG,
				MEMO = this.MEMO,
				CREATOR = this.CREATOR,
				CREATETIME = this.CREATETIME,
				JOB = this.JOB,
				INSPECT_OFFICE = this.INSPECT_OFFICE,
				CREATOR_OFFICE = this.CREATOR_OFFICE,
			};
		}
	} 
}
