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
	public partial class DR_IDX_DOC_CONTENT_I
	{
		public DR_IDX_DOC_CONTENT_I ToPOCO(bool isPOCO = true){
			return new DR_IDX_DOC_CONTENT_I(){
				TOKEN_TEXT = this.TOKEN_TEXT,
				TOKEN_TYPE = this.TOKEN_TYPE,
				TOKEN_FIRST = this.TOKEN_FIRST,
				TOKEN_LAST = this.TOKEN_LAST,
				TOKEN_COUNT = this.TOKEN_COUNT,
				TOKEN_INFO = this.TOKEN_INFO,
			};
		}
	} 
}
