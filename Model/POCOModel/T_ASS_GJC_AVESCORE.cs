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
	public partial class T_ASS_GJC_AVESCORE
	{
		public T_ASS_GJC_AVESCORE ToPOCO(bool isPOCO = true){
			return new T_ASS_GJC_AVESCORE(){
				C_DEP_CODE = this.C_DEP_CODE,
				C_LINE_CODE = this.C_LINE_CODE,
				AVESCORE = this.AVESCORE,
				NOM = this.NOM,
				C_LINE_DIR = this.C_LINE_DIR,
			};
		}
	} 
}
