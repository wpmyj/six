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
	public partial class T_ASS_COMBINEDRAW
	{
		public T_ASS_COMBINEDRAW ToPOCO(bool isPOCO = true){
			return new T_ASS_COMBINEDRAW(){
				PKID = this.PKID,
				C_DEP_CODE = this.C_DEP_CODE,
				C_LINE_CODE = this.C_LINE_CODE,
				C_LINE_DIR = this.C_LINE_DIR,
				C_FILE_FORMAT = this.C_FILE_FORMAT,
				C_FILE_NAME = this.C_FILE_NAME,
				C_FILE_PATH = this.C_FILE_PATH,
				C_MEMO = this.C_MEMO,
				C_EFF_FLAG = this.C_EFF_FLAG,
				N_START_MILE = this.N_START_MILE,
				N_END_MILE = this.N_END_MILE,
			};
		}
	} 
}
