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
	public partial class T_ASS_TRACK_VAL
	{
		public T_ASS_TRACK_VAL ToPOCO(bool isPOCO = true){
			return new T_ASS_TRACK_VAL(){
				PKID = this.PKID,
				FKID = this.FKID,
				C_GWD_CODE = this.C_GWD_CODE,
				C_DEP_CODE = this.C_DEP_CODE,
				N_UNIT_NUM = this.N_UNIT_NUM,
				C_TRACK_CODE = this.C_TRACK_CODE,
				C_LINE_CODE = this.C_LINE_CODE,
				C_LINE_NAME = this.C_LINE_NAME,
				C_LINE_DIR = this.C_LINE_DIR,
				C_STATION_NAME = this.C_STATION_NAME,
				C_STATION_CODE = this.C_STATION_CODE,
				C_STANDARD = this.C_STANDARD,
				N_STATIC_SCORE = this.N_STATIC_SCORE,
				N_DYNAMIC_SCORE = this.N_DYNAMIC_SCORE,
				N_SCORE = this.N_SCORE,
				T_ASS_DATE = this.T_ASS_DATE,
				T_CRT_TM = this.T_CRT_TM,
				C_CRT_NAME = this.C_CRT_NAME,
				C_EFF_FLAG = this.C_EFF_FLAG,
				N_ORDER = this.N_ORDER,
				C_MEMO = this.C_MEMO,
				C_EVAL_GRADE = this.C_EVAL_GRADE,
				C_LINE_CAT = this.C_LINE_CAT,
				C_ASS_DEP_CODE = this.C_ASS_DEP_CODE,
				N_TQI_VALUE = this.N_TQI_VALUE,
				N_TQI_SCORE = this.N_TQI_SCORE,
			};
		}
	} 
}
